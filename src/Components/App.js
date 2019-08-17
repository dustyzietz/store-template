import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export class App extends Component {
    state = { 
        exercises,
        exercise: {}
    }

    getExercisesByMuscles() {
        const initExercises = muscles.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {})

        console.log(muscles, initExercises)

        return Object.entries(this.state.exercises.reduce((exercises, exercise) =>{
            const {muscles} = exercise;
            exercises[muscles] = [...exercises[muscles],exercise]

            return exercises
        }, initExercises))
    }

    handleCategorySelected = category => 
        this.setState({
        category
        })
    

    handleExercisesSelected = id => 
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id)
        }))
    
    handleExerciseCreate = exercise => 
      this.setState(({ exercises }) => ({
          exercises: [
              ...exercises,
              exercise
          ]
      }))
    
    
    handleExerciseDelete = id => 
        this.setState(({ exercises }) => ({
            exercises: [
                ...exercises.filter(ex => ex.id !== id )
            ]
        }))
      
    
    handleExerciseSelectEdit = (id) => 
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id),
            editMode: true
        }))
    


    render() {
        const exercises = this.getExercisesByMuscles(),
        { category, exercise, editMode } = this.state ;
        return (
            <Fragment>
                <Header 
                onExerciseCreate={this.handleExerciseCreate}
                muscles={muscles}
                />
                  
                  <Exercises
                  exercise={exercise}
                  category={category} 
                  exercises={exercises}
                  onSelect={this.handleExercisesSelected}
                  onDelete={this.handleExerciseDelete}
                  onEditSelect={this.handleExerciseSelectEdit}
                  editMode={editMode}
                  />

                <Footer 
                category={ category }
                muscles={muscles}
                onSelect={this.handleCategorySelected}
                />
            </Fragment>
        )
    }
}

export default App
