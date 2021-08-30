class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    handleIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio > this.threshold;

        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        } 
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if(isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;

//INTERSECTIONOBSERVER Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

//El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

//El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado
//para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.