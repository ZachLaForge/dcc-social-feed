
const DisplayEntry = (props) => {
    return ( 
        <tbody>
            {props.parentEntries.map((entry, index) => {
                return(
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.post}</td>
                    </tr>
                )
            })}
        </tbody>
     );
}
 
export default DisplayEntry;
