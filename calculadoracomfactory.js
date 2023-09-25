function calculadora(){

    return{

        //     ATRIBUTOS

            display:document.querySelector('.quadro'),

            clear:document.querySelector('.clear'),


            ultimocaracter:document.querySelector('.ultimocaracter'),

            resultado: document.querySelector('.resultado'),



            //  METODOS


            remover(){
                this.display.innerHTML = "";
            },

            removerultimocaracter(){
                 this.display.innerHTML = this.display.innerHTML.slice(0, -1);

            },


            resultadoconta(){
            
                let conta = this.display.innerHTML;

                try{
                    conta = eval(conta);

                    this.display.innerHTML= conta;

                }



                catch{
                    alert('Conteudo invalido');
                }


                
            },

            




        iniciar(){

        
            this.clickbotao();
            this.pressionartecla();
        },


         clickbotao(){

            document.addEventListener("click",(e)=>{

                let local = e.target;

                if(local.classList.contains('botao')){
                    this.inserir(local.innerText);
                    
                }




                if(local.classList.contains('clear')){
                    this.remover();
                }





                if(local.classList.contains('ultimocaracter')){
                    this.removerultimocaracter();
                }




                if(local.classList.contains('resultado')){
                    this.resultadoconta();
                }
            })

        },









        inserir(valor){
            this.display.innerHTML+=valor;
        }






    }
}


let calc = calculadora();

calc.iniciar();



