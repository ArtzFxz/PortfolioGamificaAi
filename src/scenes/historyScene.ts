import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class historyScene extends Scene {
    elementoTexto?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() => {
            // Se o elemento ainda está visivel
        if (opacidade > 0) {
            // Diminuir a opacidade
            opacidade = opacidade - 0.02

            // Atualizar a opacidade do elemento
            elemento.style.opacity = opacidade.toString()
        }
        }, 20)

    }

    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")
        
        // Criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir opcadidade do elemento para 1 = visivel
        this.elementoTexto.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>`

        // Configurar Actor do Logo
        let actorLogoVer = new Actor({
            pos: vec(900, 400)
        })

        // Utilizar imagem do logo
        let imagemLogover = Resources.Logover.toSprite()

        // Aplicar zoom na imagem - 40% de x, e 40% de y
        imagemLogover.scale = vec(0.6, 0.6)

        // Configurar o actor para usar a imagem
        actorLogoVer.graphics.add(imagemLogover)

        // Adicionando Actor Logo na tela
        this.add(actorLogoVer)

        // Configurar a cena para monitorar o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            if(event.key == Keys.Enter) {
                // Criar transição suave do elemento texto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a proxima cena
                engine.goToScene("gamificacao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}
