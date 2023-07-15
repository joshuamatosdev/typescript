import {render} from "@testing-library/react";
import {add, spaceJump} from "./functionTypes";
import {spaceshipThrust, spaceShipWithoutName} from "./omit";
import {spaceJumpPartial} from "./partials";
import {pickNameAndThrustSpaceShip, spaceshipName} from "./pick";
import {readOnlySpaceShip} from "./readonly";
import {spaceShipRecord} from "./record";
import {optionalSpaceShip, spaceRequiredSpaceShip} from "./required";
import ReactJson from "react-json-view";
import {keyValueMap} from "./keyValueMap";
import {customStyle} from "./customStyle";

//Function Types
console.log(add(1, 2));
console.log(spaceJump("Bob", "Mars", true));

//Generics

//Omit
console.log(spaceShipWithoutName);
console.log(spaceshipThrust);

//Partials
console.log(spaceJumpPartial({spaceship: "SpaceX-1", location: "Mars", launched: false}));

//Pick
console.log(pickNameAndThrustSpaceShip);
console.log(spaceshipName);
console.log(spaceshipThrust);


//ReadOnlySpaceShip
console.log(readOnlySpaceShip);
//This will not work because the properties are readonly
// readOnlySpaceShip.name = "SpaceX-2";
// readOnlySpaceShip.thrust = 200;

//Record
console.log(spaceShipRecord);
console.log(spaceShipRecord["Space-X"]);

//Optional
console.log(spaceRequiredSpaceShip);
console.log(optionalSpaceShip);


render(<div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "top",
    height: "100vh",
    width: "100vw",
}}>
    <div
        style={{
            ...customStyle,
            textAlign: "center",
            minWidth: "800px",
        }}><b>Welcome, Ready To Learn TypeScript!</b></div>
    <div>
        <table style={{minWidth: '800px'}}>
            <thead>
            <tr>
                <th>Key</th>
                <th>Implementation</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(keyValueMap)
                    .map((key, index) => {
                        return <tr key={index} style={
                            {
                                ...customStyle,
                                backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                            }
                        }>
                            <td style={{...customStyle}}>{key}</td>
                            <td style={{...customStyle, textAlign: "left"}}>{
                                (keyValueMap[key] instanceof Object) ?
                                    <ReactJson 
                                        src={keyValueMap[key]} 
                                               displayDataTypes={false}
                                               displayObjectSize={false}/> :
                                    JSON.stringify(keyValueMap[key])
                            }</td>
                        </tr>
                    })
            }
            </tbody>
        </table>
    </div>
</div>);