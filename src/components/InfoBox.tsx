import { type  ReactNode } from "react"


type HintBoxProps = {
    mode: 'hint';
    children: ReactNode; 
}
type WarningBoxProps = {
    children: ReactNode;
    mode: 'warning';
    // ? ts syntax for optional, this property is optional - | allows multiple type values
    severity : 'low' | 'medium' | 'high';
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;


export default function InfoBox(props: InfoBoxProps){

    const { children, mode } = props;
    
    if(mode === 'hint'){
        return (
            <aside className="infobox infobox-hint">
                
                <p>{children}</p>
            </aside>
    );
    }

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>WARNING</h2>
            <p>{children}</p>
        </aside>
    )
    
}