import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore'
import { Observable, from } from 'rxjs'
import { UserPost } from '../models/User'

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private userPostsCollection: AngularFirestoreCollection<UserPost>
  userPosts$: Observable<UserPost[]>

  constructor(private afs: AngularFirestore) {
    this.userPostsCollection = afs.collection<UserPost>('user-posts')
    this.userPosts$ = <any>(
      this.userPostsCollection.valueChanges({ idField: 'id' })
    )
  }
  addUserPost(userPost: UserPost): Observable<DocumentReference> {
    return from(this.userPostsCollection.add(userPost))
  }
  updatePost(userPost: UserPost): Observable<void> {
    return from(
      this.afs.doc<UserPost>(`user-posts/${userPost.id}`).update({
        purrs: ++userPost.purrs,
      }),
    )
  }
}
