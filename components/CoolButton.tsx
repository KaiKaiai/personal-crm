export default function CoolButton() {
    return (

        <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={Greeting}>
                {buttonMsg}
            </button>
        </div>
 
    )
}