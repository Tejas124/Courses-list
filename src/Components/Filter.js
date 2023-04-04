import React from 'react'

function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;


    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className={'w-11/12  flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center align-center'}>
            {
                filterData?.map((data) => {
                    //console.log("Filter");
                    return (<button onClick={() => { filterHandler(data.title) }} key={data.id} 
                            className={`text-lg px-2 py-1 rounded-md font-medium border-2 text-white
                            bg-black hover:bg-opacity-50 border-1 transition-all duration-200
                            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent" }`}>
                        {data.title}
                    </button>)

                })
            }
        </div>
    )
}

export default Filter;
