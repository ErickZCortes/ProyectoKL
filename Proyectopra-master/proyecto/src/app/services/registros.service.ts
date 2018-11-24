import { Subject } from "rxjs";
import { Registro } from "../shared/registro.model";
import { Item } from "../shared/item.model";

export class RegistrosSevice {
    registroChanged = new Subject<Registro[]>();

    private registros: Registro[]=[
        new Registro('', '', [new Item(0)])
    ]
    addRegistro(registro: Registro) {
        this.registros.push(registro);
        this.registroChanged.next(this.registros.slice());
    }
    getRegistros(){
        return this.registros.slice();
    }
    getRegistro(index: number){
        return this.registros[index];
    }
    updateItem(index: number, registro : Registro){
        this.registros[index] = registro;
        this.registroChanged.next(this.registros.slice());
    }
    onDelete(index: number){
        this.registros.splice(index,1);
        this.registroChanged.next(this.registros.slice());
    }
}