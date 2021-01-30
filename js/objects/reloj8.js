const reloj = {
    horas: 12,
    minutos: 58,
    segundos: 57,
    formato: 24,
    amOPm: 'PM',
    dimeHora() {
        return `${this.horas> 9 ? this.horas : '0' + this.horas}:${this.minutos > 9 ? this.minutos : '0' + this.minutos}:${this.segundos > 9 ? this.segundos : '0' + this.segundos}${this.formato == 12 ? ' ' + this.amOPm : ''}`;
    },
    
    estableceTiempo(horas, minutos, segundos, am_pm = 'AM') {
        if (horas <= this.formato && minutos <= 59 && segundos <= 59) {
            this.horas = parseInt(horas);
            this.minutos = parseInt(minutos);
            this.segundos = parseInt(segundos);
            this.amOPm = am_pm;
        } else {
            return "Formato incorrecto."
        }
        return this.dimeHora();
    },

    incrementaHoras() {
        if (this.formato == 24) {
            if (this.horas == 23) {
                this.horas = 0;
                this.amOPm = 'AM';
            } if (this.horas == 11) {
                this.horas += 1;
                this.amOPm = 'PM';
            } else {
                this.horas += 1;
            }
        } else if (this.formato == 12) {
            if (this.horas == 11) {
                this.amOPm == 'AM' ? this.amOPm = 'PM' : this.amOPm = 'AM';
                this.horas += 1;
            } else if (this.horas == 12) {
                this.formato == 24 ? this.horas += 1 : this.horas = 1;
            } else {
                this.horas += 1;
            }
        }
        return this.dimeHora();
    },

    incrementaMinutos() {
        this.minutos == 59 ? (this.incrementaHoras(), this.minutos = 0) : this.minutos += 1;
        return this.dimeHora();
    },

    incrementaSegundos() {
        this.segundos == 59 ? (this.incrementaMinutos(), this.segundos = 0) : this.segundos += 1;
        return this.dimeHora();
    },

    cambiaFormato(formato) {
        if (formato == 12 || formato == 24) {
            this.formato = formato;

            if (formato == 24) {
                if (this.horas < 12) {
                    this.horas = this.horas + 12;
                }
            } else if (formato == 12) {
                if (this.horas > 12) {
                    this.horas = this.horas - 12;
                }
            }
        }
        return this.dimeHora();
    }
}

reloj.estableceTiempo(new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());