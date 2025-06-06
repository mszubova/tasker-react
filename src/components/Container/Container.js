import Task from"../Task/Task";
import "./Container.css";
export default function Container(){
    let tasks = [
        'Купить рис',
        'Посмотреть фильм',
        'Погладить кота',
        'Покормить кота'
        ]

    return (
        <div className = "container">
            {
                tasks.map((item, index)=>(
                    <Task 
                        name={item}
                        key={index}
                    />
                ))
            }

        </div>
    ) 
}