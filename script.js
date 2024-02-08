
  document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const wrapper = document.querySelector(".wrapper");
    const yesButton = document.getElementById("yes");
    // Function to randomly select a position for the "ĐÉO" button and move it there
    function moveNoButton() {
      // Generate random positions
      const x = Math.random() * (wrapper.offsetWidth - noButton.offsetWidth);
      const y = Math.random() * (wrapper.offsetHeight - noButton.offsetHeight);

      // Move the "ĐÉO" button to the new position
      noButton.style.left = x + "px";
      noButton.style.top = y + "px";
    }

    function changeToMeme2() {
      const meme1 = document.getElementById("meme1");
      const meme2 = document.getElementById("meme2");
      const meme3 = document.getElementById("meme3");
      meme2.style.display = "block";
      meme1.style.display = "none";
      meme3.style.display = "none";
    }

    // Function to handle mouseover event and move the "ĐÉO" button
    function handleMoveNoButton() {
      // Run the function to move the "ĐÉO" button
      changeToMeme2();
      moveNoButton();
    }

    function handleMoveYesButton() {
        // Run the function to move the "ĐÉO" button
      const meme1 = document.getElementById("meme1");
      const meme3 = document.getElementById("meme3");
      const meme2 = document.getElementById("meme2");
      meme1.style.display = "none";
      meme3.style.display = "block";
      meme2.style.display = "none";
    }

    function ThongBao() {
        // Define the htmlContent variable here
        const urlParams = new URLSearchParams(window.location.search);
        const stk = urlParams.get("stk");
        const bank = urlParams.get("bank");
    
        // Tạo nội dung HTML
        let htmlContent = `<div>Lì xì mk cái nhỉ =)):</div><div>${bank ?? ""}</div><div>${stk ?? '<img src="./Qr.jpg" alt="" class="h-[500px] mx-auto">'}</div>`;
    
        Swal.fire({
          title: "Chúc bạn năm mới luôn vui vẻ, hạnh phúc. Gặp được nhiều may mắn trong cuộc sống nhá!!!",
          html: htmlContent,
          width: 600,
          padding: "3em",
          imageUrl: "cheems-3.png",
          imageWidth: 200,
          showCancelButton: false,
          confirmButtonColor: "#fe8a71",
          cancelButtonColor: "#f6cd61",
          confirmButtonText: "Cảm ơn :)"});
    }
    // Attach mouseover event listener to the "ĐÉO" button
    noButton.addEventListener("mouseover", handleMoveNoButton);
    yesButton.addEventListener("mouseover", handleMoveYesButton)
    // Attach click event listener to the "ĐÉO" button
    noButton.addEventListener("click", handleMoveNoButton);
    yesButton.addEventListener("click", ThongBao);
  });

