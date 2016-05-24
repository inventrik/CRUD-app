import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
import {Headers} from 'angular2/http';

export interface Actor {
    active: string;
    birthDate: string;
    birthName: string;
    email: string;
    id: number;
    name: string;  
    image: string;
}

@Injectable() 
export class ActorService {
    http: Http;
    baseURL: string;
    
    constructor(private _http: Http) {
        this.baseURL = 'http://192.168.0.21:8081/RESTFramework/rest/actors/'   
    }
    
    getActors() {
        return this._http.get(this.baseURL)
            .map((response: Response) => <Actor>response.json())       
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getActor(id: number) {
        return this.getActors()
        .map(actors => actors.find(actor => actor.id == id));  
    }
    
    deleteActor(actor: Actor) {
        console.log(actor);
         return this._http
            .delete(this.baseURL + actor.id);         
    }

    addActor(actor: Actor) {
        console.log(actor);
        let data = new FormData();
        let body = JSON.stringify(actor);
        data.append("actor", body);
        let input = document.getElementById('fileUpload');
        let file = input.files[0];
        data.append("file", file, file.name)
        console.log(data);
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
        } 
    }); 
        xhr.open("POST", this.baseURL + 'add');
        xhr.send(data);
        alert(actor.name + " added!");        
    }

    updateActor(actor: Actor) {
        console.log(actor);
        let data = new FormData();
        let body = JSON.stringify(actor);
        data.append("actor", body);
        let input = document.getElementById('fileUpload');
        let file = input.files[0];
        if (file == null) {
            
        } else {
            data.append("file", file, file.name)
        }
        console.log(data);
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
        } 
    }); 
        xhr.open("PUT", this.baseURL + actor.id);      
        xhr.send(data);

        alert(actor.name + " updated!");
    }
}