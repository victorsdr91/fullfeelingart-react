import React, {useState} from 'react';
import {Button, Column, Row, Switch, SwitchInput, SwitchPaddle} from "react-foundation";
import {
    useGetContentByNameQuery,
    useUpdateComponentMutation
} from "../../services/ComponentService";
import { Callout } from 'react-foundation';
import {useDispatch} from "react-redux";
import {update} from "../../store/reducers/ComponentReducer";
import LoadMessage from "./Utils/LoadMessage";
import TextEditor from './Utils/TextEditor';
import { Widget } from '../model/Widget.ts';

const EditableAboutMe = (props) => {
    const { data, isLoading } = useGetContentByNameQuery('aboutme');
    const [updateComponent, { isLoading: isUpdating, isSuccess }] = useUpdateComponentMutation();
    const dispatch = useDispatch();
    const [aboutMe, setAboutMe] = useState({info: { title: "", description: ""}});
    const [loaded, setLoaded] = useState(false);

    if (isLoading) {
        return <> Loading... </>;
    }
    const handleUpdate = async () => {
        const componentToUpdate = {id: aboutMe.id, widgetName: aboutMe.widgetName, enabled: aboutMe.enabled, info: aboutMe.info};
        await updateComponent(componentToUpdate).unwrap();
        dispatch(update(componentToUpdate));
    };

    const handleErase = () => {
        aboutMeAux
            .setTitle('')
            .setDescription('');
        setAboutMe(aboutMeAux);
    }

    const handleTitle = ({target: {value}}) => {
        aboutMeAux.setTitle(value);
        setAboutMe(aboutMeAux);
    };

    const switchEnabled = ({target: {checked}}) => {
        aboutMeAux.setEnabled(checked);
        console.log(checked);
        setAboutMe(aboutMeAux);
    };

    const handleDescription = (event, editor) => {
        aboutMeAux.setDescription(editor.getData());
        setAboutMe(aboutMeAux);
    };

    if(data && aboutMe !== data[0] && !loaded) {
        setAboutMe(data[0]);
        setLoaded(true);
    }

    const title = aboutMe.info.title;
    const description = aboutMe.info.description;
    const aboutMeAux = new Widget(aboutMe.id, aboutMe.widgetName, {title, description});

    return (<>
                <h2>Sobre Mi</h2>
                <Callout>
                    <Row>
                        <Column>
                            <strong>Título:</strong>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitle}
                                disabled={isUpdating}
                            />
                            </Column>
                    </Row>
                    <Row>
                        <Column>
                            <strong>Descripción:</strong>
                            <TextEditor
                                data={description}
                                onChange={ handleDescription }
                                disabled={isUpdating}
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <strong>Activo:</strong>
                            <Switch onChange={ switchEnabled }>
                                <SwitchInput id="isAboutMeEnabled"  name="isAboutMeEnabled"></SwitchInput>
                                <SwitchPaddle for="isAboutMeEnabled">Activo</SwitchPaddle>
                            </Switch>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Button color="success" onClick={handleUpdate} disabled={isUpdating}>
                                Actualizar
                            </Button>
                            <Button color="alert" onClick={handleErase} disabled={isUpdating}>
                                Borrar
                            </Button>
                            <LoadMessage loaded={isSuccess} isLoading={isUpdating} />
                        </Column>
                    </Row>
                </Callout>
            </>
    );

}


export default EditableAboutMe;