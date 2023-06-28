function Menu(props) {
    const clickHandler = (event) => {
        const name = event.target.value;
        props.onSelectVideo(name);
    }
    return (
        <form onClick={clickHandler}>
            <input type='radio' name='src' value='fast' /> Fast
            <input type='radio' name='src' value='slow' /> Slow
            <input type='radio' name='src' value='cute' /> Cute
            <input type='radio' name='src' value='eek' /> Eek
        </form>
    );
};

export default Menu;