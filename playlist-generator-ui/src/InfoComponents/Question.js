const Question = (props) => {
    return <div className="question">
        <div>
            <h4>{props.faq.question}</h4>
        </div>
        <div>
            <p>{props.faq.answer}</p>
            {props.faq.bullets ? (
                <ol>{props.faq.bullets.map((b, i) => {
                    return <li>{b.point}</li>
                })}
                </ol>
            ): ""}
            {props.faq.postBulletNote ? <p>{props.faq.postBulletNote}</p> : ""}
        </div>
    </div>
}

export default Question