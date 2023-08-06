const formInputs = document.querySelectorAll('input, textarea');

      formInputs.forEach((input) => {
        const label = input.nextElementSibling;
        const labelTop = label.offsetTop;
        const labelLeft = label.offsetLeft;

        input.addEventListener('focus', () => {
          label.style.display = 'none';
        });

        input.addEventListener('blur', () => {
          if (input.value === '') {
            label.style.display = 'block';
          }
        });

        input.addEventListener('input', () => {
          label.textContent = input.value;
          input.style.top = `${labelTop}px`;
          input.style.left = `${labelLeft}px`;
        });
      });