import Rebase from 're-base'
import firebase from 'firebase'
import firebaseApp from './firebaseSetup'

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export default base
