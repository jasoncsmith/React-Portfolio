// import firebaseConfig from '../firebase/config';
// import { FirebaseApp, initializeApp } from 'firebase/app';
// import { v4 } from 'uuid';

// import {
//     getFirestore,
//     writeBatch,
//     setDoc,
//     doc,
//     Firestore,
//     collection,
//     addDoc,
//     getDocs,
//     DocumentReference,
//     DocumentData,
// } from 'firebase/firestore';

// abstract class FireBaseStore {
//     firebase: FirebaseApp;
//     db: Firestore;

//     constructor() {
//         this.firebase = initializeApp(firebaseConfig);
//         this.db = getFirestore(this.firebase);
//     }
// }

// class ProjectsStore extends FireBaseStore {
//     deleteDocument() {}

//     createProject = async (data: Project) => {
//         const document = await setDoc(doc(this.db, 'projects', v4()), data);
//         return document;
//     };

//     updateProject() {}

//     getProject() {}

//     async batchCreate(data: []) {
//         try {
//             const batch = writeBatch(this.db);

//             data.forEach(async (item, i) => {
//                 const doc: any = await this.createProject(item);
//                 batch.set(doc, item);
//             });

//             return batch.commit().then((args) => {
//                 console.log('batch complete', args);
//             });
//         } catch (e) {
//             console.error('Error adding document: ', e);
//         }
//     }

//     destroy() {}
// }

// type ProjectStoreType = InstanceType<typeof ProjectsStore>;
// const store: ProjectStoreType = new ProjectsStore();
// export default store;

// to deploy to preview url
// firebase hosting:channel:deploy preview_name
