import { timeTableData } from "./timetableData";



export const updateTimetable=(std,sub,day,startTime,endTime,ins) =>{
  for (let i = 0; i < timeTableData.length; i++) {
    if (timeTableData[i].className === std) {
      const days = timeTableData[i].days;
      for (let j = 0; j < days.length; j++) {
        if (days[j].dayName === day) {
          const subjects = days[j].subject;
          for (let k = 0; k < subjects.length; k++) {
            if (subjects[k].subjectName === sub) {

              const existingDays = [...days]; 
              existingDays.splice(j, 1);

              const existingSubjects = [...subjects];

              existingSubjects.splice(k, 1);

             

           
              const updatedObject = {
                className: std,
                days: [
                  {
                    dayName: day,
                    subject: [
                      {
                        subjectName: sub,
                        time: `${startTime}-${endTime}`,
                        ins: ins
                      },
                      ...existingSubjects
                    ]
                  },
                  ...existingDays 
                ]
              };

              timeTableData[i] = updatedObject;
              return updatedObject;
            }
          }
        }
      }
    }
  }
  return null;
}
