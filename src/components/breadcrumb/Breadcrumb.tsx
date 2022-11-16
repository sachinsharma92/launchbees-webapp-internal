

// styles
import "./styles.scss"

const Breadcrumb = (props: any) => {
    return (
        <div className="breadcrumbs">
            <span>{props.head}</span>/<span>{props.sub_head}</span>
        </div>
    )
}

export default Breadcrumb