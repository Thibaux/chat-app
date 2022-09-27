import * as React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { DeleteIcon, PlusSquareIcon } from '@chakra-ui/icons';
import styles from './chatHeader.module.scss';
import { useUserStore } from '../../../../store/UserStore';
import { CreateChatModal } from '../../../UI/Modals';
import { useChatsStore } from '../../../../store/ChatsStore';
import { GenericButton } from '../../../UI/Buttons';

export const ChatHeader = () => {
    const { userObject } = useUserStore();
    const { handleDeleteChat } = useChatsStore();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className={styles.titleWrapper}>
            <div className={styles.titleWrapper__left}>
                <GenericButton
                    title='Create chat'
                    handleClick={onOpen}
                    color='gray'
                    icon={<PlusSquareIcon />}
                />
                <GenericButton
                    title='Delete chat'
                    handleClick={handleDeleteChat}
                    color='red'
                    icon={<DeleteIcon />}
                />
            </div>
            <CreateChatModal isOpen={isOpen} onClose={onClose} />
            <div className={styles.userName}>{userObject.username}</div>
        </div>
    );
};
