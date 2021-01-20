export default function ListItem(props) {
    return (

        <tr>
            <td>{props.coach.name}</td>
            <td>{props.coach.location}</td>
            <td>{props.coach.avgRating}</td>
        </tr>
    )
}