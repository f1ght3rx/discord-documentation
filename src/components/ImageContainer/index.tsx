import styles from './styles.module.scss';
import {useState} from "react";
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import {grey} from "@mui/material/colors";

interface ImageProps {
    src: string;
    alt?: string;
    description?: string;
    zoomable?: boolean;
}

const ImageContainer = ({
                            src,
                            alt,
                            description,
                            zoomable = true
                        }: ImageProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                src={src}
                alt={alt ? alt : description}
                onClick={toggleModal}
            />
            {description && <p>{description}</p>}

            {zoomable && isModalOpen && (
                <div className={styles.modal} onClick={toggleModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Button
                            className={styles.closeButton}
                            onClick={toggleModal}
                            startIcon={<Close/>}
                            sx={{
                                lineHeight: 0,
                                marginBottom: 1,
                                color: '#121212',
                                "&:hover": { backgroundColor: grey[200] },
                            }}
                        >
                            Закрыть
                        </Button>
                        <img
                            src={src}
                            alt={`Увеличенное изображение: ${alt ? alt : description}`}
                            className={styles.enlargedImage}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageContainer;
