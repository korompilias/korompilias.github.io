import { ActionButton } from "../components/ActionButton";
import { SectionFrame } from "../components/SectionFrame";

export function DatasetsSection() {
  return (
    <SectionFrame title="Open-Source Datasets">
      <div className="dataset-grid">
        <article className="inner-block dataset-card dataset-card--teal">
          <h3>Clean</h3>
          <p>2,463 questions about Personal and Professional matters of Crisis and gives answers on how they may be Resolved.</p>
          <div className="dataset-card__actions">
            <ActionButton href="https://huggingface.co/datasets/crisisresolutions/cr-qa-gwm">HuggingFace</ActionButton>
            <ActionButton href="https://www.kaggle.com/datasets/korompilias/good-ways-model-pure-ontology-qa">Kaggle</ActionButton>
          </div>
        </article>
        <article className="inner-block dataset-card dataset-card--green">
          <h3>Pure</h3>
          <p>216 Critical Questions and Answers for Crisis Management and Machine Learning Model Fine-Tuning.</p>
          <div className="dataset-card__actions">
            <ActionButton href="https://huggingface.co/datasets/crisisresolutions/gwm-qa-pure">HuggingFace</ActionButton>
            <ActionButton href="https://www.kaggle.com/datasets/korompilias/crisisresolutionscontentclean-goodwaysmodelpure">Kaggle</ActionButton>
          </div>
        </article>
        <article className="inner-block dataset-card dataset-card--indigo">
          <h3>CGM</h3>
          <p>1,024 structured Q&A entries grounded in mathematical physics, for fine-tuning, RAG, and evaluation.</p>
          <div className="dataset-card__actions">
            <ActionButton
              href="https://github.com/gyrogovernance/science/tree/main/docs/datasets"
              ariaLabel="GitHub repository for CGM dataset files"
            >
              GitHub
            </ActionButton>
          </div>
        </article>
        <article className="inner-block dataset-card dataset-card--rose">
          <h3>THM Jailbreak</h3>
          <p>655 adversarial jailbreak prompts annotated with The Human Mark displacement risk categories.</p>
          <div className="dataset-card__actions">
            <ActionButton href="https://huggingface.co/gyrogovernance/datasets">HuggingFace</ActionButton>
            <ActionButton href="https://www.kaggle.com/korompilias/datasets">Kaggle</ActionButton>
          </div>
        </article>
      </div>
    </SectionFrame>
  );
}
