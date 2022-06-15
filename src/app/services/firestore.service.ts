import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  
  storageRef = firebase.app().storage().ref();

  constructor(private database: AngularFirestore) { }

  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }

  async createDocWithImage(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    await this.subirImagen(data.ruta, data.image).then(res => {
      data.image = res;
    })
    return collection.doc(id).set(data)
  }

  getCollection<tipo>(path: string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }

  getCollectionOrderByDate<tipo>(path: string){
    const collection = this.database.collection<tipo>(path, ref => ref.orderBy('date'));
    return collection.valueChanges();
  }

  async subirImagen(nombre: string, img: any){
    try {
      let respuesta = this.storageRef.child(nombre).putString(img, "data_url");
      console.log(respuesta);
      return (await respuesta).ref.getDownloadURL();
    } catch (err) {
      console.log(err);
    }
  }
}
