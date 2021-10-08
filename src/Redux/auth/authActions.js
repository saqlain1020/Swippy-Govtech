
import { notify } from 'reapop';
export var notice = ()=>async (dispatch)=>{
    dispatch(notify("asd","loading"))
}