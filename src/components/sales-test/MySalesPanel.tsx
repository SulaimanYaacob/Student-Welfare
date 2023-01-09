import {
    Stack,
    Table,
    Text,
    createStyles,
    Group,
    ActionIcon,
    Title,
    Modal,
    Button,
  } from "@mantine/core";
  import { getDuration, getFormattedDate } from "../../utils/dateHandler";
  import { trpc } from "../../utils/trpc";
  import {
    MdEdit,
    MdOutlineDelete,
    MdSentimentDissatisfied,
    MdOutlineAdd,
  } from "react-icons/md";
  import Image from "next/image";
  import { defaultSalesImage } from "../../types/constant";
  import useDeleteSales from "../../hooks/useDeleteSales";
  import { useState } from "react";
  import { SalesPost } from "@prisma/client";
  import Loading from "../Loading";
  import Link from "next/link";
  import { useRouter } from "next/router";
  
  const useStyles = createStyles((theme) => ({
    tableContainer: {
      fontWeight: 500,
      color: theme.colors.dark[9],
      background: theme.colors.gray[2],
      border: `solid 5px ${theme.colors.gray[2]}`,
      //boxShadow: `${theme.colors.secondary?.[9]} 0px 8px 24px`,
    },
    overWrappingText: {
      wordBreak: "break-all",
    },
  }));
  
  function MySalesPanel(){
    const { classes } = useStyles();
  const router = useRouter();
  const { data, isLoading, isRefetching } =
    trpc.salesPost.getMySales.useQuery();
  const [salesDetail, setDetailSales] = useState<SalesPost>();
  const { deleteSales, disable, opened, setOpened } = useDeleteSales();

  const handleOnClick = (salesDetail: SalesPost) => {
    setOpened(true);
    setDetailSales(salesDetail);
  };

  //! Refactor inside salesTab
  if (isLoading || isRefetching) return <Loading />;

  //! Had to hardcode styling to prevent wrapping
  const rows = data?.map((sales, index) => {
    return (
      <tr key={sales.id} className={classes.overWrappingText}>
        <td>
          <Text align="center">{++index}</Text>
        </td>
        <td>
          <Image
            src={sales.image ? sales.image : defaultSalesImage}
            alt={sales.title}
            width="100"
            height="100"
          />
        </td>
        <td style={{ maxWidth: "8vw" }}>{sales.title}</td>
        <td style={{ maxWidth: "25vw" }}>
          {sales.description ? (
            sales.description
          ) : (
            <Text color="red">Description is not available for this sales</Text>
          )}
        </td>
        <td style={{ width: "10vw" }}>{sales.venue}</td>
        <td>{getFormattedDate(sales.date)}</td>
        <td>{getDuration(sales.timeStart, sales.timeEnd)}</td>
        <td>
          <Group noWrap>
            <ActionIcon
              component={Link}
              href={`/sales/create?edit=${sales.id}&author=${sales.authorId}`}
              as={`/sales/create?edit=${sales.id}`}
              variant="transparent"
              color="green"
            >
              <MdEdit size={50} />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleOnClick(sales)}
              variant="transparent"
              color="red"
            >
              <MdOutlineDelete size={50} />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    );
  });
    
    return (
        <>
      {data && data.length ? (
        <>
          <Modal
            centered
            opened={opened}
            withCloseButton={false}
            onClose={() => setOpened(false)}
          >
            <Stack align="center">
              <Image
                src={salesDetail?.image ? salesDetail?.image : ""}
                alt={""}
                width="340"
                height="220"
              />
              <Title order={2} align="center">
                {salesDetail?.title}
              </Title>
              <Text weight={500} align="center">
                Are you sure you want to delete this sales?
              </Text>
              <Group position="center">
                {salesDetail && (
                  <Button
                    onClick={() => deleteSales(salesDetail.id)}
                    disabled={disable}
                    color="red"
                  >
                    Yes
                  </Button>
                )}

                <Button
                  onClick={() => setOpened(false)}
                  disabled={disable}
                  color="gray"
                >
                  Cancel
                </Button>
              </Group>
            </Stack>
          </Modal>

          <Stack mx="5vw" my="xl" align="flex-end">
            <Button
              component={Link}
              rightIcon={<MdOutlineAdd size="25" />}
              href="/sales/create"
              color="teal.6"
              radius="sm"
            >
              Create Sales
            </Button>
            <Table
              striped
              className={classes.tableContainer}
              verticalSpacing="md"
              horizontalSpacing="md"
            >
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Sample Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Stack>
        </>
      ) : (
        <Stack m="auto" w="35%" spacing="xl" p="3vw" align="center">
          <MdSentimentDissatisfied color="pink" size={"225"} />
          <Title color="pink.2" order={3} align="center">
            Uh Oh, It seems you don't have any sales running at the moment.
          </Title>
          <Button component={Link} href="/sales/create" color="teal.6">
            Let's Create One!
          </Button>
        </Stack>
      )}
    </>
    );
}

export default MySalesPanel;