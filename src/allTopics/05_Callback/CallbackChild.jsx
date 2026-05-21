const CallbackChild = (props) => {
    console.log(props);
    let {getData} = props;
    let data = "Hello World!"
    

    return (
        <>
         <h1>Callback Child Component</h1>
         <button onClick={() => getData(data)}>click</button>
         
        </>
    )
}

export default CallbackChild 