import {useState, useMemo} from 'react';
import { Link } from 'react-router-dom';
/// type of component's Title 
import { ToggleFormType } from '../../types/types';

function ToggleForm(props: ToggleFormType) {
    const [ path, setPath ] = useState<string>('register');
    const handlePath = useMemo(() => {
        if(props.formTitle === 'Se connecter' ){
            setPath('register')
            return `Vous n'avez pas compte ?`
        }
        setPath('login')
        return 'Vous avez un compte ?'
    },[props.formTitle]);
    return (
        <p>
            {handlePath}
            <Link to = {`/${path}`} >Cliquez ici</Link>
        </p>
    )
}

export default ToggleForm;
 