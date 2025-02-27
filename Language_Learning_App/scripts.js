document.addEventListener("DOMContentLoaded", function () {
    // Ensure elements exist before adding event listeners
    let addFlashcardButton = document.getElementById("addFlashcardButton");
    let postButton = document.getElementById("postButton");
    let lessonFile = document.getElementById("lessonFile");

    // Flashcard Functionality
    if (addFlashcardButton) {
        addFlashcardButton.addEventListener("click", function () {
            let term = document.getElementById("flashcardTerm").value.trim();
            let definition = document.getElementById("flashcardDefinition").value.trim();
            let flashcardContainer = document.getElementById("flashcardContainer");

            if (term !== "" && definition !== "") {
                let flashcard = document.createElement("div");
                flashcard.classList.add("flashcard");
                flashcard.innerHTML = `<strong>${term}</strong><br>${definition}`;
                flashcardContainer.appendChild(flashcard);

                // Clear input fields
                document.getElementById("flashcardTerm").value = "";
                document.getElementById("flashcardDefinition").value = "";
            } else {
                alert("Please enter both term and definition.");
            }
        });
    } else {
        console.error("Add Flashcard button not found!");
    }

    // Forum Post Functionality
    if (postButton) {
        postButton.addEventListener("click", function () {
            let forumInput = document.getElementById("forumInput").value.trim();
            let forumPosts = document.getElementById("forumPosts");

            if (forumInput !== "") {
                let post = document.createElement("p");
                post.textContent = forumInput;
                forumPosts.appendChild(post);

                // Clear input field
                document.getElementById("forumInput").value = "";
            } else {
                alert("Please enter a message before posting.");
            }
        });
    } else {
        console.error("Post button not found!");
    }

    // Lesson File Upload Functionality with Learning Message
    if (lessonFile) {
        lessonFile.addEventListener("change", function (event) {
            let file = event.target.files[0];
            if (file) {
                let uploadedFileName = document.getElementById("uploadedFileName");
                uploadedFileName.textContent = "Uploaded: " + file.name;

                // Add the learning message
                let message = document.createElement("p");
                message.textContent = `Let's learn this today: ${file.name}`;
                message.style.fontSize = "16px";
                message.style.color = "#007bff";  
                message.style.fontWeight = "bold";  
                message.style.marginTop = "10px";

                // Ensure only one message appears at a time
                uploadedFileName.innerHTML = `Uploaded: ${file.name}`; 
                uploadedFileName.appendChild(message);
            }
        });
    } else {
        console.error("Lesson file input not found!");
    }
});
