// script.js
document.addEventListener("DOMContentLoaded", function() {
  const turtleColors = [
      "#FF5722", // צבע צב 1
      "#4CAF50", // צבע צב 2
      "#2196F3", // צבע צב 3
      "#FFC107", // צבע צב 4
      "#9C27B0", // צבע צב 5
      "#FF9800", // צבע צב 6
      "#3F51B5", // צבע צב 7
      "#E91E63"  // צבע צב 8
  ];

  const turtles = [
      document.getElementById("turtle1"),
      document.getElementById("turtle2"),
      document.getElementById("turtle3"),
      document.getElementById("turtle4"),
      document.getElementById("turtle5"),
      document.getElementById("turtle6"),
      document.getElementById("turtle7"),
      document.getElementById("turtle8"),
  ];

  // הקצה צבעים לכל צב
  turtles.forEach((turtle, index) => {
      turtle.style.backgroundColor = turtleColors[index];
      turtle.style.left = "0px"; // כל צב מתחיל מ-0
  });

  document.getElementById("startRace").addEventListener("click", function() {
      const finishLine = document.getElementById("track").offsetWidth - 50; // 50 זה רוחב הצב
      let winner = null;

      const raceInterval = setInterval(() => {
          turtles.forEach(turtle => {
              const randomDistance = Math.floor(Math.random() * 10) + 1; // מרחק אקראי בין 1 ל-10
              const currentLeft = parseInt(turtle.style.left);
              
              // אם הצב כבר עבר את קו הסיום, אל תזוז אותו יותר
              if (currentLeft < finishLine) {
                  turtle.style.left = (currentLeft + randomDistance) + "px"; // העברת הצב
              }

              // בדוק אם הצב הגיע לקו הסיום
              if (currentLeft >= finishLine && !winner) {
                  winner = turtle.id; // מאתר את המנצח
                  clearInterval(raceInterval); // מפסיק את התחרות
                  document.getElementById("winner").innerText = `הצב המנצח הוא: ${winner}!`;
                  console.log(`המנצח הוא: ${winner}`); // הדפס את המנצח
              }
          });
      }, 100); // מרווח הזמן בין העדכונים
  });

  // פונקציה לאיפוס התחרות
  document.getElementById("resetRace").addEventListener("click", function() {
      turtles.forEach(turtle => {
          turtle.style.left = "0px"; // מחזיר את הצבים להתחלה
      });
      document.getElementById("winner").innerText = ""; // מנקה את הטקסט של המנצח
  });
});
