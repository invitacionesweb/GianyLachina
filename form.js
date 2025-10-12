const scriptUrl = 'https://script.google.com/macros/s/AKfycbyYMi41HWE4AwGc-VFhr91QLjTixH0N53SUbhAS0Z_PkRf4yOSxxyDCAKP9-KNZ28zodw/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(response => {
      Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Enviado",
        icon: "success"
      });
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1500); // da tiempo a leer el mensaje
    })
    .catch(error => {
      Swal.fire("Error", "No se pudo enviar el formulario. Intentá de nuevo.", "error");
      console.error('Error', error.message);
    });
});
