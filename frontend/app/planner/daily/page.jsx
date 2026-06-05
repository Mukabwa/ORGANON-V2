"use client";

import { useEffect } from "react";

import {
  useState,
} from "react";

import AddDefinitionModal
  from "@/components/planner/AddDefinitionModal";

import {
  fetchWithAuth,
} from "@/lib/api";

export default function DailyPlannerPage() {

  const [
    occurrences,
    setOccurrences,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    showModal,
    setShowModal,
  ] = useState(false);

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const fetchTimeline =
    async () => {

      try {

        setLoading(true);

        const data =
          await fetchWithAuth(

            `/timeline/daily?date=${today}`
          );

        setOccurrences(
          data.occurrences
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchTimeline();

  }, []);

  const completeOccurrence =
    async (id) => {

      try {

        await fetchWithAuth(

          `/occurrences/${id}/complete`,

          {
            method: "PATCH",
          }
        );

        fetchTimeline();

      } catch (error) {

        console.error(error);
      }
    };

  if (loading) {

    return (

      <div className="p-10">

        <p>
          Loading planner...
        </p>

      </div>
    );
  }

  return (

    <div
      className="
        min-h-screen
        bg-[#f8f6f2]
        text-black
        p-6
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          justify-between
          items-center
          mb-8
        "
      >

        <div>

          <h1
            className="
              text-4xl
              font-bold
            "
          >

            Daily Planner

          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >

            {today}

          </p>

        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }

          className="
            bg-black
            text-white
            px-5
            py-3
            rounded-2xl
          "
        >

          + Add

        </button>

      </div>

      {/* TASKS */}

      <div className="space-y-4">

        {occurrences.length === 0 && (

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              text-center
            "
          >

            <p className="text-gray-500">

              Nothing planned yet.

            </p>

          </div>
        )}

        {occurrences.map(
          (occurrence) => (

            <div
              key={
                occurrence._id
              }

              className="
                bg-white
                rounded-3xl
                p-5
                shadow-sm
                border
              "
            >

              <div
                className="
                  flex
                  justify-between
                  items-start
                "
              >

                <div>

                  <h2
                    className={`
                      text-xl
                      font-semibold

                      ${
                        occurrence.status ===
                        "completed"

                          ? "line-through opacity-50"

                          : ""
                      }
                    `}
                  >

                    {
                      occurrence.title
                    }

                  </h2>

                  {occurrence.time && (

                    <p
                      className="
                        text-gray-500
                        mt-1
                      "
                    >

                      {
                        occurrence.time
                      }

                    </p>
                  )}

                  {occurrence.description && (

                    <p
                      className="
                        mt-3
                        text-sm
                        text-gray-700
                      "
                    >

                      {
                        occurrence.description
                      }

                    </p>
                  )}

                </div>

                <button
                  onClick={() =>
                    completeOccurrence(
                      occurrence._id
                    )
                  }

                  className="
                    border
                    rounded-full
                    w-7
                    h-7
                    flex
                    items-center
                    justify-center
                  "
                >

                  {occurrence.status ===
                  "completed"

                    ? "✓"

                    : ""}

                </button>

              </div>

            </div>
          )
        )}

      </div>

      {/* MODAL */}

      {showModal && (

        <AddDefinitionModal
          onClose={() =>
            setShowModal(false)
          }

          onCreated={
            fetchTimeline
          }
        />
      )}

    </div>
  );
}