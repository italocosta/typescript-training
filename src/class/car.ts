import { Vehicle} from '../interface/vehicle'

class Car implements Vehicle{

    constructor(private model:string = "Model of car"){
    }

    getModel():string{
        return this.model;
    }
}

export {Car}