import { Actor, Color, Engine, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    elementText?: HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Configurar Actor de gamificação
        let actorGamificIMG = new Actor({
            pos: vec(350, 400)
        })

        // Utilizar imagem do logo
        let imagemGamific = Resources.Gamific.toSprite()

        // Aplicar zoom na imagem - 40% de x, e 40% de y
        imagemGamific.scale = vec(1.4, 1.4)

        // Configurar o actor para usar a imagem
        actorGamificIMG.graphics.add(imagemGamific)

        // Adicionando Actor Logo na tela
        this.add(actorGamificIMG)


        // Criar elemento com a descrição da empresa
        this.elementText = document.createElement("div") as HTMLElement 


        // Definir opcadidade do elemento para 1 = visivel
        this.elementText.style.opacity = "1"

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementText)

        // Adicionar classe na div criada (elementoTexto)
        this.elementText.classList.add("gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementText.innerHTML = `<h2>O que é Gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

    }
}