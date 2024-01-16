import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            handleClose();
        }
    })

    const actionBar = <div>
        <Button onClick={handleClose} primary rounded> I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here It's a notice from Professor Albus Dumbledore
        </p>
    </Modal>

    return (
        <div>
            <Button primary rounded onClick={() => setShowModal(true)}>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget orci nisi. Aenean turpis velit, bibendum vel dictum sed, semper in purus. Sed posuere odio non erat fermentum, pulvinar auctor massa dignissim. Duis ante orci, dignissim nec viverra at, blandit at ipsum. Suspendisse ultricies, sem ac fermentum dictum, dolor ex dictum erat, nec aliquam lacus enim ac felis. Suspendisse metus dolor, iaculis eu vestibulum eu, efficitur vitae nisl. Fusce in venenatis urna. Etiam a facilisis ex. Etiam tempor vel nibh ultrices viverra. Sed efficitur pretium consectetur. Vivamus nec metus varius, ultrices elit at, ultricies mi. Cras porttitor fringilla nibh, vitae euismod nisl elementum ut.
                Donec elit turpis, pretium sit amet metus ac, condimentum elementum odio. Nulla aliquet, quam nec mollis auctor, mauris felis commodo urna, non iaculis ligula neque ut ligula. Mauris tempus rhoncus sapien, vitae scelerisque arcu consequat a. Proin tincidunt cursus sodales. Pellentesque malesuada nulla est, non rutrum leo sagittis non. Quisque quis nisi neque. Donec non mollis lorem, vitae pretium libero. Aliquam rhoncus erat at leo tristique interdum. Etiam consequat lacus non scelerisque auctor. Nullam ullamcorper justo a odio dictum varius. Nam pretium efficitur finibus. Aliquam sodales eros a semper vestibulum. Duis at metus vitae velit venenatis consectetur at vitae sapien.
                Vestibulum ultrices erat id mauris iaculis lacinia. Cras consectetur scelerisque tortor eu venenatis. Fusce tempus nulla justo, id rhoncus erat efficitur quis. Nunc tellus est, ullamcorper rutrum bibendum quis, iaculis et augue. Etiam viverra, libero nec vulputate imperdiet, sapien nisl vulputate elit, sit amet finibus justo velit et mauris. Mauris id est sit amet metus posuere suscipit eu sit amet ante. Suspendisse tincidunt nunc ut maximus interdum. Duis luctus vehicula nulla ac rutrum. Aliquam vehicula diam ut sapien condimentum mollis. Phasellus eget felis eget ex condimentum facilisis eu id velit. Morbi pellentesque neque at lectus efficitur, vel molestie ante aliquam. Curabitur ullamcorper est vitae felis elementum vehicula id eu est.
                Ut dignissim iaculis lectus, in porta odio pretium a. Duis placerat efficitur metus quis mattis. Fusce tincidunt blandit velit. Etiam cursus in quam in vehicula. Mauris ac lacinia lorem, in lobortis dolor. Curabitur mollis suscipit augue a suscipit. Donec ut massa sit amet velit dapibus pellentesque. Nam iaculis neque eget sapien cursus, sed aliquet tortor suscipit. Praesent a nisl id quam imperdiet mollis a tristique mauris. Maecenas tempus fringilla metus, et tempus dolor dapibus varius. Donec ac leo felis.
            </p>
        </div>
    );
};

export default ModalPage