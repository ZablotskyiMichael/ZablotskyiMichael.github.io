
const TodoList = () => {
    return (
        <div>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
        </div>
    );
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    );
};

const SearchPanel = function () {
    return <input placeholder="search"/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('reactDiv'));