import {Pipe, PipeTransform, Injectable} from 'angular2/core';

@Pipe ({
    name: 'actorFilter',
    pure: false
})

@Injectable()
export class ActorFilterPipe implements PipeTransform {
     transform (value, [queryString]) {
    if (value==null) {
      return null;
    }

    return value.filter((actor)=>new RegExp(queryString).test(actor.name))
  }
}