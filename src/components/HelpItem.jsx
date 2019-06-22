import React from 'react';

export default function Help ({ command, parameters, description }) {

    var parametersStr = '';
    if(parameters && parameters.length > 0) {
        if(parameters.length > 1) {
            parameters.slice(0, parameters.length - 1).forEach(p => {
                parametersStr += `<${p}>, `;
            })
        }
        parametersStr += `<${parameters[parameters.length - 1]}>`;
    } else {
        parametersStr = 'None'
    }

    return (
        <tr>
            <td>!{command}</td>
            <td>
                {parametersStr}
            </td>
            <td>{description}</td>
        </tr>
    )
}