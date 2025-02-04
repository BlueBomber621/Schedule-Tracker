"use client"

import { createContext, useState, useEffect, useContext } from "react"
import { authContext } from "./auth-context";

// Firebase
import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore"; 

export const appContext = createContext({
    tasks: [],
    addTask: async () => {},
    removeTask: async () => {},
    editTask: async () => {},
});

export const AppContextProvider = (props) => {
    const { user } = useContext(authContext);

    const [tasks, setTasks] = useState([]);

    // task item updates
    const addTask = async (task) => {
        const collectionRef = collection(db, 'tasks')
  
        try {
          const docSnap = await addDoc(collectionRef, task);
    
          setTasks(prevState => {
            return [
              ...prevState,
              {
                id: docSnap.id,
                ...task,
              },
            ]})
        } catch (error) {
          console.log(`Document error: ${error}`)
          throw error
        }
    }

    const removeTask = async (taskId) => {
        const docRef = doc(db, 'tasks', taskId);
      try {
        await deleteDoc(docRef);
        setTasks(prevState => {
          return prevState.filter(i => i.id !== taskId);
        })
      } catch (error) {
        console.log(`Error removing task: ${error}`);
        throw error
      }
    }

    const editTask = async (taskId, editedTask) => {
        const docRef = doc(db, 'tasks', taskId);
        try {
            await updateDoc(docRef, {
                ...editedTask
            });
            setTasks(prevState => {
                return prevState.map(task => 
                    task.id === taskId ? { ...task, ...editedTask } : task
                );
            });
        } catch (error) {
            console.log(`Error editing task: ${error}`);
            throw error;
        }
    }

    const values = { tasks, addTask, removeTask, editTask }

    useEffect(() => {
        if(!user) return;
  
          const getTaskData = async () => {
            const collectionRef = collection(db, 'tasks');
            const q = query(collectionRef, where("uid", '==', user.uid))
  
            const docsSnap = await getDocs(q);
      
            const data = docsSnap.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                  uid: user.uid,
                }
            });
      
            setTasks(data);
          }
      
          getTaskData();
      }, [user])

    return (
        <appContext.Provider
            value={values}
        >
            {props.children}
        </appContext.Provider>
    );
};