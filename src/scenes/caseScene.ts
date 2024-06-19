import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any

    elementoTexto?: HTMLElement

    private textoDaCena?: string

    private imagemNpc?: Actor

    private listaImagens?: Sprite[]


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
         // Adicionar classe na div criada (elementoTexto)
         this.elementoTexto.classList.add("texto-case")

        // Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        this.imagemNpc = new Actor ({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // Carregar imagens das cases
        let imgCaseUm = Resources.case1.toSprite()
        let imgCaseDois = Resources.case2.toSprite()
        let imgCaseTres = Resources.case3.toSprite()

        this.listaImagens = [imgCaseUm, imgCaseDois, imgCaseTres]


        this.engine.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                this.engine.goToScene("exposicao")
            }
        })


    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Definir opcadidade do elemento para 1 = visivel
        this.elementoTexto!.style.opacity = "1"

        
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A";

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto!.innerHTML = `<h2>Case 1</h2>
        
        <p>A nossa empresa de gamificação GamificaAi, foi contratada para transformar uma empresa de refrigerantes,○
         onde, os trabalhos designados pelos trabalhadores era algo muito exaustivo, destarte, a GamificaAi conseguiu gamificar 
         o processo deste trabalho, assim, todos os trabalhadores que realizassem o trabalho adequadamente, receberia premiações,
          e até mesmo bonificações para eles.</p>`
            
        // Inserir o sprite no actor da mesa A
        this.imagemNpc?.graphics.add(this.listaImagens![0])

        // Mudar o zoom da imagem
        this.imagemNpc!.graphics.current!.scale = vec(0.8, 0.8)

        }

        // Se for B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B";

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto!.innerHTML = `<h2>Case 2</h2>
        
        <p>A nossa empresa de gamificação GamificaAi, foi contratada para transformar uma Escola, onde,
         muitas vezes os alunos andam causando durante as aulas, deixando as coisas desorganizadas etc.
          Destarte, com vossa Empresa, conseguimos transformar essas ações realizadas pelos alunos em algo mais divertido,
           assim, quem arrumasse a sala e mante-se quieto, receberia premiações. </p>`

           // Inserir o sprite no actor da mesa A
        this.imagemNpc?.graphics.add(this.listaImagens![1])

        // Mudar o zoom da imagem
        this.imagemNpc!.graphics.current!.scale = vec(0.8, 0.8)

        }

        // Se for C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C";

            // Adicionar titulo e paragrafo dentro do conteudo da div
            this.elementoTexto!.innerHTML = `<h2>Case 3</h2>
        
        <p>A nossa empresa de gamificação GamificaAi, foi contratada para transformar uma empresa de design,
         onde, não conseguiam se organizar de forma legal e menos exaustiva. Destarte, com vossa Empresa,
          conseguimos transformar essas dificuldades enfrentadas pela equipe em algo mais divertido, assim,
           quem se mante-se organizado ganharia bonificações</p>`

           // Inserir o sprite no actor da mesa A
        this.imagemNpc?.graphics.add(this.listaImagens![2])

        // Mudar o zoom da imagem
        this.imagemNpc!.graphics.current!.scale = vec(0.8, 0.8)
        }

        this.add(this.imagemNpc!)
        
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover elemento texto da tela
        this.elementoTexto!.style.opacity = "0"
    }
}