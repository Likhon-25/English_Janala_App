const loadLesson = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json()) // promis of json data
        .then(json => displayLessons(json.data))
}

const displayLessons = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("lavel-container");
    levelContainer.innerHTML = "";

    // 2. get into every lessons 
    for (let lesson of lessons) {
        // 3. create Element
        console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button href="" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
        </button>
        `
        // 4. append into container
        levelContainer.append(btnDiv)
    }


}
loadLesson()

git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Likhon-25/English_Janala_App.git
git push -u origin main