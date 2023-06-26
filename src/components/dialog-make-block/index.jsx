import * as React from "react";
import "./dialog-make-block.css";
import { ReactComponent as Note } from "assets/Note.svg";
import DialogPattern from "../dialog-pattern";
import { ReactComponent as Plus } from "assets/Plus.svg";
import { ReactComponent as Play } from "assets/icon-make-block/Play.svg";
import { ReactComponent as ImageSquare } from "assets/icon-make-block/ImageSquare.svg";
import { ReactComponent as File } from "assets/icon-make-block/File.svg";
import { ReactComponent as Minus } from "assets/icon-make-block/Minus.svg";
import { ReactComponent as BookmarkSimple } from "assets/icon-make-block/BookmarkSimple.svg";
import { ReactComponent as ListBullets } from "assets/icon-make-block/ListBullets.svg";
import { ReactComponent as ListNumbers } from "assets/icon-make-block/ListNumbers.svg";
import { ReactComponent as ListPlus } from "assets/icon-make-block/ListPlus.svg";
import { ReactComponent as Quotes } from "assets/icon-make-block/Quotes.svg";
import { ReactComponent as TextT } from "assets/icon-make-block/TextT.svg";
import { ReactComponent as TextHTwo } from "assets/icon-make-block/TextHTwo.svg";
import { ReactComponent as TextHThree } from "assets/icon-make-block/TextHThree.svg";
import { ReactComponent as TextHOne } from "assets/icon-make-block/TextHOne.svg";
import { ReactComponent as Table } from "assets/icon-make-block/Table.svg";
import { ReactComponent as Check } from "assets/icon-make-block/Check.svg";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { getData } from "./createData";

function DialogMakeBlock({ handleCreate }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const create = React.useCallback(
    (type) => {
      const data = {
        time: dayjs().unix(),
        blocks: type === "text" ? [] : [{ id: nanoid(10), ...getData(type) }],
        version: "2.26.5",
      };

      handleCreate(data);
      handleClose();
    },
    [handleCreate],
  );

  return (
    <>
      <DialogPattern
        widthInherit
        custom="dialog-make-block"
        className="dialog-make-block"
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        trigger={
          <div className="page-projects__add">
            <Plus />
          </div>
        }
        icon={<Note />}
        title="Make a block"
        content={
          <>
            <div className="dialog-make-block__content">
              <div className="dialog-make-block__columns">
                <div className="dialog-make-block__title">Format</div>
                <div className="dialog-make-block__list">
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("todo")}
                  >
                    <div className="dialog-make-block__img">
                      <Check />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        To-do list
                      </div>
                      <div className="dialog-make-block__description">
                        Don't forget what to do.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("text")}
                  >
                    <div className="dialog-make-block__img">
                      <ListPlus />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Text</div>
                      <div className="dialog-make-block__description">
                        Start writing using plain text.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("h1")}
                  >
                    <div className="dialog-make-block__img">
                      <TextHOne />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Title Type A
                      </div>
                      <div className="dialog-make-block__description">
                        Section title (large size)
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("h2")}
                  >
                    <div className="dialog-make-block__img">
                      <TextHTwo />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Title Type B
                      </div>
                      <div className="dialog-make-block__description">
                        Section title (medium size)
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("h3")}
                  >
                    <div className="dialog-make-block__img">
                      <TextHThree />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Title Type C
                      </div>
                      <div className="dialog-make-block__description">
                        Section title (small size)
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("table")}
                  >
                    <div className="dialog-make-block__img">
                      <Table />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Table</div>
                      <div className="dialog-make-block__description">
                        Add a simple table to your page.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("bullet")}
                  >
                    <div className="dialog-make-block__img">
                      <ListBullets />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Bulleted list
                      </div>
                      <div className="dialog-make-block__description">
                        Start writing using plain text.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("number")}
                  >
                    <div className="dialog-make-block__img">
                      <ListNumbers />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Numbered list
                      </div>
                      <div className="dialog-make-block__description">
                        Create a numbered list.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dialog-make-block__columns">
                <div className="dialog-make-block__title">Contents</div>
                <div className="dialog-make-block__list">
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("quote")}
                  >
                    <div className="dialog-make-block__img">
                      <Quotes />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Quotation
                      </div>
                      <div className="dialog-make-block__description">
                        Write a quote.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("divider")}
                  >
                    <div className="dialog-make-block__img">
                      <Minus />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Contour</div>
                      <div className="dialog-make-block__description">
                        Divide blocks visually.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("callout")}
                  >
                    <div className="dialog-make-block__img">
                      <TextT />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Callout</div>
                      <div className="dialog-make-block__description">
                        Write articles that stand out.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dialog-make-block__columns">
                <div className="dialog-make-block__title">Attach</div>
                <div className="dialog-make-block__list">
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("image")}
                  >
                    <div className="dialog-make-block__img">
                      <ImageSquare />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Image</div>
                      <div className="dialog-make-block__description">
                        Upload a file or embed it as a link.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("video")}
                  >
                    <div className="dialog-make-block__img">
                      <Play />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">Video</div>
                      <div className="dialog-make-block__description">
                        Upload a file or embed it as a link.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("link")}
                  >
                    <div className="dialog-make-block__img">
                      <BookmarkSimple />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">
                        Bookmark
                      </div>
                      <div className="dialog-make-block__description">
                        Save the link as a visual bookmark.
                      </div>
                    </div>
                  </div>
                  <div
                    className="dialog-make-block__item"
                    onClick={() => create("file")}
                  >
                    <div className="dialog-make-block__img">
                      <File />
                    </div>
                    <div className="dialog-make-block__text">
                      <div className="dialog-make-block__subtitle">File</div>
                      <div className="dialog-make-block__description">
                        Upload a file or embed it using a link.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="dialog-make-block__btn">Cancel</button>
          </>
        }
      />
    </>
  );
}

export default DialogMakeBlock;
