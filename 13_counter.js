// // Class components
// class Counter extends React.Component {
//   // State Declaration
//     constructor() {
//         super();
//         this.state = {
//         count: 0,
//         };
//     }

//     render() {
//         return (
//         <div>
//             <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{this.state.count}</p>
//             <button onClick={() => this.setState({ count: this.state.count - 1 })}>-1</button>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
//         </div>
//         );
//     }
//     }

//     // Cafe Component
//     class MyApp extends React.Component {
//     render() {
//         return (
//         <div>
//             <Counter />
//         </div>
//         );
//     }
//     };

// const myElement = <Counter />;
// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// function component
const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{count}</p>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
    };

    // Cafe Component
    const MyApp = () => {
    return (
        <div>
        <Counter />
        </div>
    );
    };

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// note jika ingin menjalankan komennya dimatikan salah satu