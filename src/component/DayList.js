
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if(days.length === 0) {
        return <span>Loading...</span>
    }

   /*  const [days, setDays] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:3001/days")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
                console.log(data);
               
            })
    }, []); *///매게변수([]빈배열을 사용하면 랜더링 직수 1회만)가 변경될때만 실행한다 - 의존성배열이라고함 


    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                        
                    </li>
                ))}
            </ul>
            
        </>
    )
}

