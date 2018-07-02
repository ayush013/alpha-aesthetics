import { BehaviorSubject, Subject } from 'rxjs';

export interface ProfileData {
  weight: number;
  weightunit: number;
  age: number;
  goal: number;
  experience: number;
  lifestyle: number;
  heightcm?: number;
  heightunit: number;
  heightfeet?: number;
  heightinch?: number;
}

export class LocalInteractionService {

  constructor() {
   }

  LinkChange = new Subject<any>();

  MoveTo = new Subject<any>();

  insightdatamodel: Array<Object> = [{
    class: String,
    property: String,
    value: String,
    text: String
  }]

blogarray = [
    { route: 'cheatday', article: 'I love cheat days, I love cheat days, I love cheat days', title: 'Cheat Day Inspirations', text: 'I love cheat days, They can be helpful sometimes :)', icon: 'fa-cutlery', category: 'Miscellaneous', image: 'http://homecookingadventure.com/images/recipes/brownies.jpg'},
    { route: 'periodization', article: 'DUP, Block Periodization  DUP, Block Periodization  DUP, Block Periodization ', title: 'Periodization', text: 'DUP, Block Periodization and much more..', icon: 'fa-clock-o', category: 'Training', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEXX-wuzkGL4mT5uSiD-soQEecvJLln4Gb__tVfKX3XoxuNUM0A'},
    { route: 'pancake', article: 'Easy Protein Pancake Recipe in just 5 minutes.. Easy Protein Pancake Recipe in just 5 minutes..', title: 'Protein Pancake Recipe', text: 'Easy Protein Pancake Recipe in just 5 minutes..', icon: 'fa-cutlery', category: 'Recipe', image: 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg'}
];

workoutarray = [
  {
    route: 'beginner',
    workout: [
    [ {name: 'Push A'}, 
    [{exercise:'Barbell Bench Press', sets:'3', reps: '8-12'}, {exercise:'Machine Chest Fly', sets:'3', reps: '10-12'}, {exercise:'Dumbbell Shoulder Press', sets:'3', reps: '8-12'}, {exercise:'Dumbbell Side Raise', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Tricep Extension', sets:'5', reps: '10-15'}]
    ],
    [ {name: 'Pull A + Obliques'}, 
    [{exercise:'Barbell Deadlift', sets:'3', reps: '6-8'}, {exercise:'Single Arm Dumbbell Row', sets:'3', reps: '8-12'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Barbell Shrugs', sets:'3', reps: '10-15'}, {exercise:'Barbell Bicep Curl', sets:'5', reps: '10-15'}, {exercise:'Dumbbell Side Bend', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ],
    [ {name: 'Push B'}, 
    [{exercise:'Barbell Shoulder Press', sets:'3', reps: '8-10'}, {exercise:'Incline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Decline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Cable Tricep Pushdown', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Skullcrusher', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Pull B'}, 
    [{exercise:'Pullups', sets:'3', reps: '8-10'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Cable Face Pulls', sets:'3', reps: '8-12'}, {exercise:'Preacher Curl', sets:'3', reps: '10-15'}, {exercise:'Reverse Cable Curl', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Legs and Abs'}, 
    [{exercise:'Barbell Squat', sets:'3', reps: '8-10'}, {exercise:'Machine Leg Press', sets:'3', reps: '8-12'}, {exercise:'Romanian Deadlift', sets:'3', reps: '8-12'}, {exercise:'Machine Leg Curl', sets:'3', reps: '8-12'}, {exercise:'Machine Calf Press', sets:'5', reps: '10-15'}, {exercise:'Cable Crunch', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ]
  ],
    title: `Beginner's Workout`, 
    features: ['Specially Focused on Beginners','Fundamentals of Weight Training','5 times Week','Build Strength/Muscle and Lose Fat'], 
    description: `This workout program is specially crafted for people who are just beginning their journey. 
    Congratulations for taking your first step!
    This program will lay a foundation about basics of weight training.
    This is 5 days a week workout program with moderate intensity.
    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.`,
    image: '../../assets/images/dashboard/beginnersworkout.svg'
  },
  {
    route: 'fullbody',
    workout: [
    [ {name: 'Push A'}, 
    [{exercise:'Barbell Bench Press', sets:'3', reps: '8-12'}, {exercise:'Machine Chest Fly', sets:'3', reps: '10-12'}, {exercise:'Dumbbell Shoulder Press', sets:'3', reps: '8-12'}, {exercise:'Dumbbell Side Raise', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Tricep Extension', sets:'5', reps: '10-15'}]
    ],
    [ {name: 'Pull A + Obliques'}, 
    [{exercise:'Barbell Deadlift', sets:'3', reps: '6-8'}, {exercise:'Single Arm Dumbbell Row', sets:'3', reps: '8-12'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Barbell Shrugs', sets:'3', reps: '10-15'}, {exercise:'Barbell Bicep Curl', sets:'5', reps: '10-15'}, {exercise:'Dumbbell Side Bend', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ],
    [ {name: 'Push B'}, 
    [{exercise:'Barbell Shoulder Press', sets:'3', reps: '8-10'}, {exercise:'Incline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Decline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Cable Tricep Pushdown', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Skullcrusher', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Pull B'}, 
    [{exercise:'Pullups', sets:'3', reps: '8-10'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Cable Face Pulls', sets:'3', reps: '8-12'}, {exercise:'Preacher Curl', sets:'3', reps: '10-15'}, {exercise:'Reverse Cable Curl', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Legs and Abs'}, 
    [{exercise:'Barbell Squat', sets:'3', reps: '8-10'}, {exercise:'Machine Leg Press', sets:'3', reps: '8-12'}, {exercise:'Romanian Deadlift', sets:'3', reps: '8-12'}, {exercise:'Machine Leg Curl', sets:'3', reps: '8-12'}, {exercise:'Machine Calf Press', sets:'5', reps: '10-15'}, {exercise:'Cable Crunch', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ]
  ],
    title: `Full Body Workout`, 
    features: ['Specially Focused on Beginners','Fundamentals of Weight Training','5 times Week','Build Strength/Muscle and Lose Fat'], 
    description: `This workout program is specially crafted for people who are just beginning their journey. 
    Congratulations for taking your first step!
    This program will lay a foundation about basics of weight training.
    This is 5 days a week workout program with moderate intensity.
    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.`,
    image: '../../assets/images/dashboard/fullbodyworkout.svg'
  },
  {
    route: 'women',
    workout: [
    [ {name: 'Push A'}, 
    [{exercise:'Barbell Bench Press', sets:'3', reps: '8-12'}, {exercise:'Machine Chest Fly', sets:'3', reps: '10-12'}, {exercise:'Dumbbell Shoulder Press', sets:'3', reps: '8-12'}, {exercise:'Dumbbell Side Raise', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Tricep Extension', sets:'5', reps: '10-15'}]
    ],
    [ {name: 'Pull A + Obliques'}, 
    [{exercise:'Barbell Deadlift', sets:'3', reps: '6-8'}, {exercise:'Single Arm Dumbbell Row', sets:'3', reps: '8-12'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Barbell Shrugs', sets:'3', reps: '10-15'}, {exercise:'Barbell Bicep Curl', sets:'5', reps: '10-15'}, {exercise:'Dumbbell Side Bend', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ],
    [ {name: 'Push B'}, 
    [{exercise:'Barbell Shoulder Press', sets:'3', reps: '8-10'}, {exercise:'Incline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Decline Dumbbell Press', sets:'3', reps: '8-12'}, {exercise:'Cable Tricep Pushdown', sets:'3', reps: '10-15'}, {exercise:'Dumbbell Skullcrusher', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Pull B'}, 
    [{exercise:'Pullups', sets:'3', reps: '8-10'}, {exercise:'Machine Lat Pulldown', sets:'3', reps: '8-12'}, {exercise:'Cable Face Pulls', sets:'3', reps: '8-12'}, {exercise:'Preacher Curl', sets:'3', reps: '10-15'}, {exercise:'Reverse Cable Curl', sets:'3', reps: '10-15'}]
    ],
    [ {name: 'Legs and Abs'}, 
    [{exercise:'Barbell Squat', sets:'3', reps: '8-10'}, {exercise:'Machine Leg Press', sets:'3', reps: '8-12'}, {exercise:'Romanian Deadlift', sets:'3', reps: '8-12'}, {exercise:'Machine Leg Curl', sets:'3', reps: '8-12'}, {exercise:'Machine Calf Press', sets:'5', reps: '10-15'}, {exercise:'Cable Crunch', sets:'4', reps: '10-15'}]
    ],
    [ {name: 'Rest Day'}, 
    [{exercise:'Rest Day'}]
    ]
  ],
    title: `Women's Workout`, 
    features: ['Specially Focused on Beginners','Fundamentals of Weight Training','5 times Week','Build Strength/Muscle and Lose Fat'], 
    description: `This workout program is specially crafted for people who are just beginning their journey. 
    Congratulations for taking your first step!
    This program will lay a foundation about basics of weight training.
    This is 5 days a week workout program with moderate intensity.
    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.`,
    image: '../../assets/images/dashboard/womenworkout.svg'
  },
 ];

calarray = [
  { route: 'bulking', title: 'Gain Weight', features: ['Caloric Surplus','Gain Muscle and Strength','Suitable for Lean Bulking'], image: '../../assets/images/dashboard/gainweight.svg'},
  { route: 'fatloss', title: 'Lose Weight', features: ['Caloric Deficit','Lose Fat and Get Shredded','Maintain Muscle and Strength'], image: '../../assets/images/dashboard/loseweight.svg'},
  { route: 'maintenance', title: 'Maintain Weight', features: ['Maintenance Calories','Lose Fat and Build Muscle slowly','Body Recomposition'], image: '../../assets/images/dashboard/maintainweight.svg'}
];

  private blogArray = new BehaviorSubject(this.blogarray);
  BlogObservable = this.blogArray.asObservable();

  private workoutArray = new BehaviorSubject(this.workoutarray);
  WorkoutObservable = this.workoutArray.asObservable();

  private calArray = new BehaviorSubject(this.calarray);
  CalObservable = this.calArray.asObservable();

  googledata = {
    fname: 'Ayush',
    lname: 'Singh',
    gender: 'male',
    imgsrc: '../../assets/images/dp.jpg',
    email: 'ayush.singh.xda@gmail.com'
  };

  private googleObject = new BehaviorSubject(this.googledata);
  GoogleObservable = this.googleObject.asObservable();
  
  profiledata: ProfileData = {
    age: 21,
    experience : 2,
    goal : 5,
    heightcm : 172,
    heightunit : 1,
    lifestyle : 1, 
    weight : 70, 
    weightunit : 1
  };

  SetProfile(data) {
    this.profiledata = data;
    console.log(this.profiledata)
  }

  GetProfileData() {
    return this.profiledata;
  }
  GetGoogleData() {
    return this.googledata;
  }

}
