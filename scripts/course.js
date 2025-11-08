const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }

];

function clearCourseCards() {
    if (coursesContainer) {
        coursesContainer.innerHTML = '';
    }
}

/**
 * Dynamically displays course cards in the container.
 * @param {Array<Object>} courseArray - The array of course objects to display.
 */
function displayCourses(courseArray) {
    clearCourseCards();

    if (!coursesContainer) {
        console.error("Course container element with ID 'second' not found.");
        return;
    }

    courseArray.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        // Apply a class based on completion status for styling
        if (course.completed) {
            // Use a class for completed courses (e.g., a green border or background)
            card.classList.add('course-completed');
        } else {
            // Use a class for incomplete courses (e.g., a gray border or different background)
            card.classList.add('course-incomplete');
        }

        // 1. Title (e.g., WDD 131: Dynamic Web Fundamentals)
        const title = document.createElement('h3');
        title.textContent = `${course.subject} ${course.number}: ${course.title}`;
        card.appendChild(title);

        // 2. Credits
        const credits = document.createElement('p');
        credits.className = 'course-credits';
        credits.textContent = `Credits: ${course.credits}`;
        card.appendChild(credits);

        // 3. Description
        const description = document.createElement('p');
        description.className = 'course-description';
        description.textContent = course.description;
        card.appendChild(description);

        // 4. Completion Status Indicator
        const status = document.createElement('p');
        status.className = 'course-status';
        status.textContent = course.completed ? 'Status: Completed' : 'Status: Not Completed';
        
        // Add a class to the status text itself for fine-grained styling
        status.classList.add(course.completed ? 'status-completed-text' : 'status-incomplete-text');
        card.appendChild(status);

        // Append the card to the container
        coursesContainer.appendChild(card);
    });
}

// Call the function to display the courses when the script runs
// This ensures the display is dynamic and adjusts automatically to the data source.
displayCourses(courses);