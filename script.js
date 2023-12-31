


  document.addEventListener('DOMContentLoaded', function () {
    // Function to open the video modal
    function openVideoModal() {
      var myModal = new bootstrap.Modal(document.getElementById('videoModal'));
      myModal.show();
    }

    // Call the function on mobile device
    if (window.innerWidth < 768) {
      openVideoModal();
    }

    // Close the video modal when it's hidden
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
      document.getElementById('myVideo').pause();
    });
  });

