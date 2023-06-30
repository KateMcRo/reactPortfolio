import Navigation from "../navigation/Navigation";

export default function Header({view, setView, state, dispatch}) {
    return (
        <header>
            <Navigation view={view} setView={setView} state={state} dispatch={dispatch} />
        </header>
    )
}