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
    const [aboutMe, setAboutMe] = useState({id: null, widgetName: null, enabled: false, info: { title: "", description: ""}});
    const [loaded, setLoaded] = useState(false);

    if (isLoading) {
        return <> Loading... </>;
    } else {
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

        const handleEnabled = () => {
            aboutMeAux.setEnabled(!aboutMe.enabled);
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
        const isEnabled = aboutMe.enabled;
        const aboutMeAux = new Widget(aboutMe.id, aboutMe.widgetName, title, description);

        return (<>
                    <h2>Sobre Mi</h2>
                    <Callout>
                        <Row>
                            <Column>
                                <strong>T??tulo:</strong>
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
                                <strong>Descripci??n:</strong>
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
                                <Switch size="tiny" onChange={ handleEnabled } input={{defaultChecked: isEnabled}}>

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
}


export default EditableAboutMe;